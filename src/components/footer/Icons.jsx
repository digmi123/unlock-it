import Icon from "@/main/common/components/icon/Icon";
import { socialIcons } from "./const";

export default function Icons() {
  return (
    <div className="flex gap-4 items-center">
      {socialIcons.map((contactOption) => (
        <Icon icon={contactOption.icon} key={contactOption} />
      ))}
    </div>
  );
}
