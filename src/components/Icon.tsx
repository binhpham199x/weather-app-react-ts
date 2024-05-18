interface Props {
   icon: string;
   iconQuality?: "2x" | "4x";
   text?: string;
   size?: string;
}

const Icon = ({ icon, iconQuality = "4x", text, size = "size-10" }: Props) => {
   let spanElement;
   text = text?.trim();
   if (text != undefined) spanElement = <span className="pr-5">{text}</span>;
   else {
      spanElement = null;
   }
   return (
      <div className="flex items-center space-x-2 bg-gray-200 rounded-lg">
         <img
            src={`https://openweathermap.org/img/wn/${icon}@${iconQuality}.png`}
            alt="Icon"
            className={size}
         />
         {spanElement}
      </div>
   );
};

export default Icon;
