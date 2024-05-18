import { useState } from "react";

interface Props {
   title: string;
}

const Header = ({ title }: Props) => {
   const [time, setTime] = useState();
   return (
      <>
         <div id="headerWrapper">
            <span>{title}</span>
         </div>
      </>
   );
};

export default Header;
