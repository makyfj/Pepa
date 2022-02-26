import { View, Text, StyleSheet, TextInput } from "react-native";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

import PressableText from "./styled/PressableText";

export type ExerciseForm = {
  name: string;
  duration: string;
};

type WorkoutFormProps = {
  onSubmit: (form: ExerciseForm) => void;
};

export default function WorkoutForm({ onSubmit }: WorkoutFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ExerciseForm>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercise Form</Text>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="name"
          render={({ field: { onChange, value, onBlur } }) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
        {errors.name && (
          <Text style={styles.error}>This field is required!</Text>
        )}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
          name="duration"
        />
        {errors.duration && (
          <Text style={styles.error}>This field is required!</Text>
        )}

        <PressableText text="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  title: {
    textAlign: "center",
    fontFamily: "notosans-bold",
    fontSize: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "gray",
    borderRadius: 8,
  },
  error: {
    color: "red",
  },
});
