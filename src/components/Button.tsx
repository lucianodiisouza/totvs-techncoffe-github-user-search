import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

export const Button: React.FC<TouchableOpacityProps> = ({
  children,
  ...props
}) => {
  return (
    <TouchableOpacity {...props}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};
