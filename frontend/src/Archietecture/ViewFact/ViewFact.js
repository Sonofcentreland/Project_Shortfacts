import { useEffect } from "react";
import { useFunctions } from "../../Connection/Functions";
import { useParams } from "react-router-dom";

function ViewFact() {
  const { sid } = useParams();
  const { shortfact, getFactById } = useFunctions();

  useEffect(() => {
    getFactById(sid);
  }, [sid]);

  // const fact = () => {
  //   getFactById(sid);
  // }

  return (
    <div className="AddFact">
      <p >{shortfact.image}Iam Kanishka</p>
    </div>
  );
}

export default ViewFact;
