"use client";

import { useConfigStore } from "@/zustand/useConfigStore";
import React, { useEffect } from "react";
import { HexColorPicker } from "react-colorful";
import "./style.css";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Button } from "@/components/ui/button";
import Values from "values.js";

const ColorPicker = () => {
  const color = useConfigStore((state) => state.color);
  const setColor = useConfigStore((state) => state.setColor);
  const colors = useConfigStore((state) => state.colors);
  const setColors = useConfigStore((state) => state.setColors);

  //console.log(colors[8].hex);

  useEffect(() => {
    function fetchColors() {
      try {
        let shades = new Values(color).shades(10);
        setColors(shades);
      } catch (err) {
        // setError(true);
      }
    }
    fetchColors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color]);

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Pick Color</Button>
        </PopoverTrigger>
        <PopoverContent className="p-5 bg-white">
          <div className="custom-color-picker w-[250px] flex flex-col items-center gap-3 p-5rounded-sm">
            <div>
              <HexColorPicker color={color} onChange={setColor} />
            </div>
            <div>
              <Input
                type="text"
                placeholder="Your Color(#5029ae)"
                className="w-full"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <div className="flex flex-col gap-2">
        {colors.map((item, idx) => {
          return (
            <div
              key={idx}
              style={{
                width: "100%",
                height: "50px",
                backgroundColor: `#${item.hex}`,
                color: "white",
              }}
            >
              #{item.hex}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ColorPicker;
