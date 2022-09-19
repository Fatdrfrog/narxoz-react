import { useState } from "react";

const faculties = [
  {
    key: 1,
    name: "ENG",
  },
  {
    key: 2,
    name: "LNG",
  },
  {
    key: 3,
    name: "FYL",
  },
  {
    key: 4,
    name: "JUR",
  },
  {
    key: 5,
    name: "MED",
  },
];
export default function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isChecked, setIsChecked] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleChangeFirstName = (event) => {
    setName(event.target.value);
  };

  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleChangeFaculty = (index) => {
    const newChecked = isChecked.map((ch, idx) => {
      if (index === idx) return !ch;
      else return ch;
    });

    setIsChecked(newChecked);
  };

  const handleSubmitForm = (event, data) => {
    event.preventDefault();

    console.log("data", data);
    // long hard proces
    setTimeout(() => {
      console.log({ name: name, lastName: lastName, faculties: isChecked });
    }, 10000);
    console.log("DOne!");
  };

  return (
    <div>
      {/* input first Name */}
      <form>
        <p>First name</p>
        <input
          name="fname"
          type="text"
          placeholder="Enter your name"
          onChange={handleChangeFirstName}
          value={name}
        />
        {/* input last Name */}
        <p>Last name</p>
        <input
          name="lname"
          type="text"
          placeholder="Enter your Last name"
          onChange={handleChangeLastName}
          value={lastName}
        />

        {/* input checkbox */}

        <p>Faculty</p>

        {faculties.map((faculty, index) => (
          <div key={faculty.key}>
            <span>{faculty.name}</span>
            <input
              name="faculty"
              type="checkbox"
              checked={isChecked[index]}
              onChange={() => handleChangeFaculty(index)}
            />
          </div>
        ))}

        <button type="submit" onClick={handleSubmitForm}>
          Submit form
        </button>
      </form>
    </div>
  );
}

// cd ..
// npx create-react-app form-app
