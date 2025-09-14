import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setstatus] = useState(false);

  const toggle = () => {
    setstatus(!status);
    onClick();
  };

  if (status) return <AiFillHeart size={35} color="#ff6b81" onClick={toggle} />;
  return <AiOutlineHeart size={35} onClick={toggle} />;
};

export default Like;
