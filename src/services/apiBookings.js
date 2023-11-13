import supabase, { SUPABASE_URL } from "./supabase";

export async function getBookings({ filter, sortBy }) {
  let query = supabase
    .from("bookings")
    .select("*, cabins(name), guests(fullName)");

  if (filter !== null)
    query = query[filter.method || "eq"](filter.field, filter.value);

  const { data, error } = await query;

  if (error) {
    console.log(error);
    throw new Error("Error fetching bookings");
  }
  return data;
}

export async function createBooking(newBooking) {
  const hasImagePath = newBooking.image?.startsWith?.(SUPABASE_URL);

  // Rename image name and remove forward slash to avoid creating/putting images folders
  const imageName = `${Math.random()}-${newBooking.image?.name}`.replaceAll(
    "/",
    "",
  );

  const imagePath = `${SUPABASE_URL}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Create a new cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newBooking, image: imagePath }]);

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be created");
  }

  // 2. Upload image
  // CASE - for cabin duplicate event: if curr cabin has an image uploaded, duplicate cabin should not upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newBooking.image);

  // 3. Delete the cabin IF image upload fails
  if (storageError) {
    // await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error(
      "Cabin image could not be uploaded so cabin was not created",
    );
  } else {
    console.log("Image uploaded successfully");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("Cabin could not be deleted");
  }
  return data;
}

export async function getBooking(id) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, cabins(*), guests(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    throw new Error("Booking not found");
  }

  return data;
}
