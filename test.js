function solution() {
  let insects = [
    { label: "쌍별귀뚜라미", value: "INSECT5" },
    { label: "누에", value: "INSECT3" },
    { label: "누에", value: "INSECT3" },
    { label: "누에", value: "INSECT3" },
    { label: "누에", value: "INSECT3" },
  ];

  const filterInsect = insects.filter(
    (v, i) => insects.findIndex((x) => v.label === x.label) === i
  );
  console.log(" filterInsect:", filterInsect);
}

solution();
