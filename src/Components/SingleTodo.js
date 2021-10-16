import React from "react";
/* import TertiaryButton from './TertiaryButton'
import SecondaryButton from './SecondaryButton' */
import Button from "./Button";
import { ReactComponent as Edit } from "./../resources/SVGs/edit.svg";
import { ReactComponent as Circle } from "./../resources/SVGs/circle.svg";
import { ReactComponent as CheckCircle } from "./../resources/SVGs/check-circle.svg";
import { ReactComponent as Trash } from "./../resources/SVGs/trash.svg";

const SingleTodo = ({ todo }) => {
  const { content, id } = todo;
  return (
    <div>
      <div>
        <input type="checkbox" name="isDone" id={`check${id}`} />
        <p>{content}</p>
      </div>
      <div>
        <Button style="">
          <Edit />
        </Button>
        <Button style="">
          <Trash />
        </Button>
      </div>
    </div>
  );
};

export default SingleTodo;
