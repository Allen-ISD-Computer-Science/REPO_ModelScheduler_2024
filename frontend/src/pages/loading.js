import { hatch } from "ldrs";

hatch.register();

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <l-hatch color="white" />
    </div>
  );
}
