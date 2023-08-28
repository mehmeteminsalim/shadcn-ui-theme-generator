import ColorPicker from "@/components/shared/color-picker";
import CopyCode from "@/components/shared/copy-code";

export default function Home() {
  return (
    <div className="container p-10">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12">
          <div>
            <h1 className={`text-3xl font-bold`}>Shadcn/ui Theme Generator</h1>
            <p className={`text-gray-500`}>
              Hand-picked themes that you can copy and paste into your apps.
            </p>
          </div>
        </div>
        <div className="col-span-12">
          <ColorPicker />
          <CopyCode />
        </div>
      </div>
    </div>
  );
}
