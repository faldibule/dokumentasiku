"use client"

import { authentication } from "@/recoil/Authentication";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

function Before(props) {
   const navigate = useRouter();
   const { auth, user } = useRecoilValue(authentication);
   useEffect(() => {
      if (auth) {
         navigate("/dashboard");
      }
   }, [auth]);

   return props.children;
}

export default Before;