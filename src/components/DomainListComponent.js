import React from "react";
import DomainTableRow from "./DomainTableRow";

const DomainListComponent = ({deleteDomain,domains}) =>
    <div>
        {
            domains.map(function(domain, index) {
                return <DomainTableRow
                    deleteDomain={deleteDomain}
                    key={domain._id}
                    domain={domain}/>
            })
        }
    </div>
export default DomainListComponent
