import { useRouter, usePathname, useSearchParams } from "next/navigation";

const useQueryParams = () => {
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const changeQueryParams = (key: string, value: string) => {
    const queryParams = new URLSearchParams(params.toString());
    if (value !== "") {
      queryParams.set(key, value);
    } else {
      queryParams.delete(key);
    }
    router.push(pathname + "?" + queryParams.toString());
  };

  return { changeQueryParams };
};

export default useQueryParams;