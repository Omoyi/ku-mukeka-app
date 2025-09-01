import { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { supabase } from "../lib/supabase";

export default function AuthScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signIn() {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) console.error(error.message);
    else console.log("Signed in:", data.session?.user);
  }

  return (
    <View>
      <Text>Email</Text>
      <TextInput value={email} onChangeText={setEmail} />
      <Text>Password</Text>
      <TextInput secureTextEntry value={password} onChangeText={setPassword} />
      <Button title="Sign In" onPress={signIn} />
    </View>
  );
}
