import { useEffect, useState } from "react";

const fakeNames = ["John", "Michael", "David", "Chris", "Alex"];
const countries = ["US 🇺🇸", "UK 🇬🇧", "CA 🇨🇦", "AU 🇦🇺"];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function LiveRegisterPDFFree() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = {
        name: getRandomItem(fakeNames),
        country: getRandomItem(countries),
      };

      setData(newData);
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 4000);
    }, 15000); // mỗi 15s hiện 1 lần (đừng spam)

    return () => clearInterval(interval);
  }, []);

  if (!visible || !data) return null;

  return (
    <div className="fixed bottom-5 left-5 bg-white shadow-xl border border-gray-200 rounded-xl px-4 py-3 text-sm animate-fade-in">
      <p className="text-gray-800">
        <span className="font-semibold">{data.name}</span> from{" "}
        <span>{data.country}</span> just registered to get free PDF 🔥
      </p>
    </div>
  );
}
