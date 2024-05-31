insert WorkExperience {
  _modified_date := <cal::local_datetime>$modified_date,

  job_title := <str>$job_title,
  company_name := <str>$company_name,

  city := <str>$city,
  state := <str>$state,

  start_date := <cal::local_date>$start_date,
  end_date := <cal::local_date>$end_date,

  details := <array<str>>$details
}