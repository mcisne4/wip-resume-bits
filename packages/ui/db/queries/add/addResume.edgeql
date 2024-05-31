insert Resume {
  _modified_date := <cal::local_datetime>$modified_date,

  alias := <str>$alias,

  person := <Person>$person,
  job_title := <JobTitle>$job_title,

  address := <Address>$address,
  contacts := <IndexedContact>$contacts,
  statement := <Statement>$statement,

  work_experiences := <WorkExperience>$work_experiences,
  education := <Education>$education,

  skills := <IndexedSkill>$skills,
  languages := <IndexedLanguage>$languages,
}