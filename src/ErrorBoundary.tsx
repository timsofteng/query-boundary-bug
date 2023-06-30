import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ReactNode } from "react";
import {
  ErrorBoundary as ErrorBoundaryPackage,
  FallbackProps,
} from "react-error-boundary";
import { useNavigate } from "react-router-dom";

const Fallback = (props: FallbackProps) => {
  console.log("in boundary");
  const navigate = useNavigate();

  return (
    <div>
      <div>Failed to load element</div>
      <button onClick={props.resetErrorBoundary}>Try Again</button>
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
          FallbackComponent={Fallback}
          onReset={reset}
          {...props}
        >
          {children}
        </ErrorBoundaryPackage>
      )}
    </QueryErrorResetBoundary>
  );
};
