"use client"
import { authentication } from "@/recoil/Authentication";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useRecoilValue } from "recoil";

function After(props) {
   const { auth } = useRecoilValue(authentication);
   const router = useRouter()
   if (!auth) {
      return router.push('/');
   }

   return props.children;
}

export default After;