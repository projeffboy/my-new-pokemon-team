import { DarkMode, LightMode, SettingsBrightness } from "@mui/icons-material";
import { ToggleButton, ToggleButtonGroup, useColorScheme } from "@mui/material";
import React from "react";

const LightDarkMode: React.FC = () => {
  const { mode, setMode } = useColorScheme();
  if (mode === undefined) {
    return null;
  }

  const handleMode = (
    _event: React.MouseEvent<HTMLElement>,
    newMode: typeof mode
  ) => setMode(newMode);

  return (
    <ToggleButtonGroup
      value={mode ?? "system"}
      exclusive
      onChange={handleMode}
      aria-label="appearance"
      size="small"
      color="primary"
    >
      <ToggleButton value="system" aria-label="system">
        <SettingsBrightness />
      </ToggleButton>
      <ToggleButton value="light" aria-label="light">
        <LightMode />
      </ToggleButton>
      <ToggleButton value="dark" aria-label="dark">
        <DarkMode />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default LightDarkMode;
