import { Button } from "@/components/ui/button/button.component";
import { useTheme } from "../../hooks/use-theme.hook";
import { MoonIcon, SunIcon } from "lucide-react";

export function ToggleThemeButton() {
  const { theme, setTheme } = useTheme()

  const handleChangeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button onClick={handleChangeTheme}>
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}