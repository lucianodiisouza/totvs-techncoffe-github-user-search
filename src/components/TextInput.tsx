import { TextInput as Input, StyleSheet, TextInputProps } from "react-native";

interface InputProps extends TextInputProps {}

export const TextInput: React.FC<InputProps> = ({ ...props }) => {
  return (
    <Input placeholder="@github profile" style={styles.textInput} {...props} />
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: "100%",
    borderWidth: 0.5,
    borderColor: "gray",
    paddingVertical: 8,
    paddingLeft: 4,
    borderRadius: 4,
  },
});
