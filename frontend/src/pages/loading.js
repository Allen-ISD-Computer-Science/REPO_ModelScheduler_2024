import { hatch } from "ldrs";

hatch.register();

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <l-hatch color="white" />
    </div>
  );
}
