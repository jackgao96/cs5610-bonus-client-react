import React from "react";

import DomainListComponent from "./DomainListComponent"

const DomainComponent =
    ({
         updateForm,
        newDomainTitle,
        addDomain,
        deleteDomain,
        domains
    }) =>

            <div className="container">
                {
                        <DomainListComponent
                            deleteDomain={deleteDomain}
                            domains={domains}/>

                }
                <button onClick={addDomain}>Add Domain</button>
            </div>




export default DomainComponent
