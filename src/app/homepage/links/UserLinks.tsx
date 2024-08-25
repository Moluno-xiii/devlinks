import { RootState } from "@/app/store/store";
import React from "react";
import { useSelector } from "react-redux";
import Link from "./Link";
import { useLinksQuery } from "@/hooks/useLinksQuery";
import Loader from "@/components/UI/Loader";

type Props = {};

const UserLinks = (props: Props) => {
  const { user } = useSelector((state: RootState) => state.auth);
const {data, isLoading, error} = useLinksQuery(user?.$id)
//   const dispatch = useDispatch<AppDispatch>()
//   const {data, isLoading, error} = useQuery({
//     queryKey : ['fetchLinks', user],
//     queryFn : () => dispatch(fetchLinks(user.$id))
//   })
if (isLoading) return <Loader />
  return (
    <ul className="flex flex-col gap-y-5 my-5">
        {data?.documents.map((link, index) => (
      <Link link = {link} key={link.$id} index={index} />
        ))}
    </ul>
  );
}

export default UserLinks;
