import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Functions } from "./Functions";
import Homepage from "../Archietecture/Homepage/Homepage";
import ViewFact from "../Archietecture/ViewFact/ViewFact";

function Link() {
  return (
    <div className="Link">
      <BrowserRouter>
        <Functions>
            <Routes>
                <Route path="/home" element={<Homepage/>} />
                <Route path="/view-fact/:sid" element={<ViewFact/>} />
            </Routes>
        </Functions>
      </BrowserRouter>
    </div>
  );
}

export default Link;