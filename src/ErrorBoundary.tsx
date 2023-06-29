import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ReactNode } from "react";
import {
  ErrorBoundary as ErrorBoundaryPackage,
  FallbackProps,
} from "react-error-boundary";

const Fallback = (props: FallbackProps) => {
  return (
    <div>
      <div>Failed to load element</div>
      <button onClick={props.resetErrorBoundary}>Try Again</button>
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
