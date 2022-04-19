import MarkdownPreview from '@uiw/react-markdown-preview'

function Education() {
  const source = `
  # Academic training
  ## UTN (2012 - 2018)
  ### Mechanical Engineer
 ## Universidad de Palermo
  
  ### Bachelor of Mathematics (2021 - Current)
  ## Courses
  <ul>
  <li> Initial Web Developer (UTN)</li>
  <li> Advanced Web Developer (UTN)</li>
  <li> React JS (UTN)</li>
  <li> Algorithms and Data structures (UTN)</li>
  <li> IoT (UTN)</li>
  </ul>   
  `
  return <MarkdownPreview source={source} className="fullContainer" />
}

export default Education
