import * as React from "react";
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button, Dropdown, Switch } from "@/components";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = (props) => {
  // todo: fix types
  const [size, setSize] = React.useState<any>("md");
  const [colorway, setColorway] = React.useState<any>("primary");
  const [rounded, setRounded] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="w-full h-screen flex justify-center items-center">
      <div className="absolute top-4 right-4 flex gap-2 items-center">
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        <Switch
          onCheckedChange={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        />
      </div>
      <Dropdown.Root>
        <Dropdown.Trigger asChild>
          <Button colorway={colorway} size={size} rounded={rounded}>
            Open Dropdown
          </Button>
        </Dropdown.Trigger>
        <Dropdown.Content side="top">
          <Dropdown.Label>Rounded</Dropdown.Label>
          <Dropdown.CheckboxItem checked={rounded} onCheckedChange={setRounded}>
            <Dropdown.ItemIndicator>
              <CheckIcon />
            </Dropdown.ItemIndicator>
            Is Rounded?
          </Dropdown.CheckboxItem>
          <Dropdown.Separator />
          <Dropdown.Label>Colorway</Dropdown.Label>
          <Dropdown.RadioGroup value={colorway} onValueChange={setColorway}>
            <Dropdown.RadioItem value="primary">
              <Dropdown.ItemIndicator>
                <DotFilledIcon />
              </Dropdown.ItemIndicator>
              Primary
            </Dropdown.RadioItem>
            <Dropdown.RadioItem value="neutral">
              <Dropdown.ItemIndicator>
                <DotFilledIcon />
              </Dropdown.ItemIndicator>
              Neutral
            </Dropdown.RadioItem>
            <Dropdown.RadioItem value="success">
              <Dropdown.ItemIndicator>
                <DotFilledIcon />
              </Dropdown.ItemIndicator>
              Success
            </Dropdown.RadioItem>
            <Dropdown.RadioItem value="danger">
              <Dropdown.ItemIndicator>
                <DotFilledIcon />
              </Dropdown.ItemIndicator>
              Danger
            </Dropdown.RadioItem>
          </Dropdown.RadioGroup>
          <Dropdown.Separator />
          <Dropdown.Sub>
            <Dropdown.SubTrigger asChild>
              <Dropdown.Item>
                Size
                <ChevronRightIcon />
              </Dropdown.Item>
            </Dropdown.SubTrigger>

            <Dropdown.SubContent sideOffset={2} alignOffset={-5}>
              <Dropdown.Label>Sizes</Dropdown.Label>
              <Dropdown.RadioGroup value={size} onValueChange={setSize}>
                <Dropdown.RadioItem value="xs">
                  <Dropdown.ItemIndicator>
                    <DotFilledIcon />
                  </Dropdown.ItemIndicator>
                  xs
                </Dropdown.RadioItem>
                <Dropdown.RadioItem value="sm">
                  <Dropdown.ItemIndicator>
                    <DotFilledIcon />
                  </Dropdown.ItemIndicator>
                  sm
                </Dropdown.RadioItem>
                <Dropdown.RadioItem value="md">
                  <Dropdown.ItemIndicator>
                    <DotFilledIcon />
                  </Dropdown.ItemIndicator>
                  md
                </Dropdown.RadioItem>
                <Dropdown.RadioItem value="lg">
                  <Dropdown.ItemIndicator>
                    <DotFilledIcon />
                  </Dropdown.ItemIndicator>
                  lg
                </Dropdown.RadioItem>
              </Dropdown.RadioGroup>
            </Dropdown.SubContent>
          </Dropdown.Sub>
        </Dropdown.Content>
      </Dropdown.Root>
    </main>
  );
};

export { Layout };
