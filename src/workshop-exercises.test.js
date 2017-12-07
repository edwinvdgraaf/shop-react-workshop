

const ENABLE_EXERCISE_1 = false;
const ENABLE_EXERCISE_2 = false;

it('jest wants atleast one test', () => {
  true
});


if(ENABLE_EXERCISE_1) {
  it('does not compute', () =>{
    throw new Error()
  });
}
