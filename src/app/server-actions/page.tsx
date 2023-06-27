import { cookies } from "next/headers";
import { ErrorBoundary } from "react-error-boundary";

export default function ServerActions() {
  async function addItem(data: FormData) {
    "use server";

    const name = data.get("name") as string;
    // throw new Error("Invalid input.");

    cookies().set("server-cookie", name, { httpOnly: true });
  }

  async function removeCookie() {
    "use server";
    cookies().delete("server-cookie");
  }

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <form action={addItem}>
        <label>
          <span>Cookie content</span>
          <br />
          <input className="text-black" type="text" name="name" id="name" />
        </label>
        <br />
        <button className="border mt-2 p-1" type="submit">
          Add to Cart
        </button>
      </form>
      <form action={removeCookie}>
        <button className="border mt-2 p-1" type="submit">
          Delete cookie
        </button>
      </form>
    </ErrorBoundary>
  );
}
