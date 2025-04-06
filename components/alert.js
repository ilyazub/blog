import Container from "./container";
import cn from "classnames";
import { EXAMPLE_PATH } from "@/lib/constants";

export default function Alert({ preview }) {
  return (
    <div
      className={cn("border-b", {
        "bg-accent-7 border-accent-7 text-white": preview,
        "bg-accent-1 border-accent-2": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm leading-5">
          {preview ? (
            <>
              This is page is a preview.{" "}
              <Link
                href="/api/exit-preview"
                className="underline hover:text-cyan-400 transition-colors duration-200"
              >
                Click here
              </Link>
              &nbsp; to exit preview mode.
            </>
          ) : (
            <></>
          )}
        </div>
      </Container>
    </div>
  );
}
