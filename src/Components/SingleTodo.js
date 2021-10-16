import React from "react";
/* import TertiaryButton from './TertiaryButton'
import SecondaryButton from './SecondaryButton' */
import Button from "./Button";
import CheckBox from "./CheckBox";

import { ReactComponent as Edit } from "./../resources/SVGs/edit.svg";
import { ReactComponent as Trash } from "./../resources/SVGs/trash.svg";

const SingleTodo = ({ todo }) => {
  const { content, id } = todo;
  return (
    <div>
      <div>
        <CheckBox id={id} />
        <p>{content}</p>
      </div>
      <div>
        <Button>
          <Edit />
        </Button>
        <Button>
          <Trash />
        </Button>
      </div>
    </div>
  );
};

export default SingleTodo;
