import React, { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => {
    return (
        <div className="bg-[#1f2335] border border-[#292e42] rounded-lg p-6  ">
            {children}
        </div>
    );
};

export default Card;
