import React, { ReactNode } from "react";
import {
  FallbackProps,
  ErrorBoundary as ReactErrorBoundary,
} from "react-error-boundary";
import { Box, Typography, Button } from "@mui/material";

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <Box sx={{ padding: 3, textAlign: "center" }}>
      <Typography variant="h5" color="error" gutterBottom>
        Oops! Something went wrong.
      </Typography>
      <Typography
        variant="body1"
        color="textSecondary"
        sx={{ marginBottom: 2 }}
      >
        {error.message}
      </Typography>
      <Button variant="contained" color="primary" onClick={resetErrorBoundary}>
        Try Again
      </Button>
    </Box>
  );
}

export function ErrorBoundary({ children }: { children: ReactNode }) {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error: Error, info: React.ErrorInfo) => {
        console.error("Error caught by ErrorBoundary:", error, info);
      }}
      onReset={() => {
        console.log("Error boundary has been reset");
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}
