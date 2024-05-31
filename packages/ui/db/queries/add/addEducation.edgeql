insert Education {
  _modified_date := <cal::local_datetime>$modified_date,

  school_name := <str>$school_name,

  degree := <str>$degree,
  field_of_study := <str>$field_of_study,

  gpa := <float32>$gpa,

  start_date := <cal::local_date>$start_date,
  end_date := <cal::local_date>$end_date
}