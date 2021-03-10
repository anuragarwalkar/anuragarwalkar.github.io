import { useEffect } from "react";
import environment from "../environment/environment";

const useTitle = (title: string) => {
  useEffect(() => {
    document.title = `${environment.title} | ${title}`;
  }, [title]);
};

export default useTitle;
