import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toogle = () => {
    setStatus(!status);
    onClick();
  };
  if (status) return <FaHeart color="#ff6b81" size="40" onClick={toogle} />;
  return <FaRegHeart color="#ff6b81" size={40} onClick={toogle} />;
};

export default Like;
