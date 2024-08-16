import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import dp from "@/assets/im-avatar.png";

export const DisplayPicture = () => {
  return (
    <Avatar>
      <AvatarImage src={dp.src} height={100} width={100} alt="@vijay" />
      <AvatarFallback>VJ</AvatarFallback>
    </Avatar>
  );
};
