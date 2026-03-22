import { useABTest } from "./useABTest";

export default function Headline() {
  const variant = useABTest();

  const content = {
    A: (
      <>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
          Pass Your Next .NET Interview
        </h1>
        <p className="text-xl mt-2">
          By Answering Like a Senior (Even If You’re Not One Yet)
        </p>
      </>
    ),
    B: (
      <>
        <h1 className="text-4xl font-bold">
          You Don’t Fail .NET Interviews Because You Lack Knowledge
        </h1>
        <p className="text-xl mt-2">You Fail Because You Can’t Explain It</p>
      </>
    ),
    C: (
      <>
        <h1 className="text-4xl font-bold">
          Struggling to Explain .NET in Interviews?
        </h1>
        <p className="text-xl mt-2">
          Learn How to Answer Like a Senior Developer
        </p>
      </>
    ),
  };

  return <div>{content[variant]}</div>;
}
