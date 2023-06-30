import { ErrorBoundary as ErrorBoundaryPackage } from "@suspensive/react";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

const Fallback = (props: any) => {
  console.log("in boundary");
  const navigate = useNavigate();

  return (
    <div>
      <div>Failed to load element</div>
      <button onClick={props.reset}>Try Again</button>
      <button onClick={() => navigate("/one")}>to page one</button>
    </div>
  );
};

export const ErrorBoundary = ({
  children,
  ...props
}: any & {
  children: ReactNode;
}) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundaryPackage
          resetKeys={[window.location.pathname]}
          fallback={({ reset }) => <Fallback reset={reset} />}
          onReset={reset}
          {...props}
        >
          {children}
        </ErrorBoundaryPackage>
      )}
    </QueryErrorResetBoundary>
  );
};
