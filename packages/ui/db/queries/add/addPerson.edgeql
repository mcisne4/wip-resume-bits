insert Person {
  _modified_date := <cal::local_datetime>$modified_date,

  first_name := <str>$first_name,
  last_name := <str>$last_name,
  middle_name := <str>$middle_name
}