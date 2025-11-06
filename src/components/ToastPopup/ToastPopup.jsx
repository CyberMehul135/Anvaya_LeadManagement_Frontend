import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import useToastPopupContext from "../../contexts/ToastPopupContext";

export default function ToastPopup({ label }) {
  const { isToastPopupVisible } = useToastPopupContext();

  return (
    <div
      className={`fixed z-[60] flex items-center gap-2 py-4 pl-4 pr-28 border border-border-default bg-surface-secondary text-text-primary text-sm font-semibold shadow-xl rounded-md transition-all duration-1000 ease-in-out ${
        isToastPopupVisible ? "bottom-6 right-12" : "bottom-[-100px] right-12"
      }`}
    >
      <CheckCircleRoundedIcon className="!text-[20px]" />
      <p>{label}</p>
    </div>
  );
}
