import supabase from "./supabase";

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    console.log(error);
    throw new Error("Error fetching settings");
  }

  return data;
}

// We expect a newSetting object that looks like { setting:newValue }
export async function updateSetting(newSetting) {
  const { data, error } = await supabase
    .from("settings")
    .update(newSetting)
    // There is only ONE row of settings, and it has the id of 1, and so this is the updated one
    .eq("id", 1)
    .single();

  if (error) {
    console.log(error);
    throw new Error("Error updating setting");
  }
  return data;
}