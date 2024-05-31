module default{
  type JobTitle {
    required _modified_date: cal::local_datetime;

    required job_title: str {
      constraint min_len_value(2);
      constraint exclusive;
    }
  }
}
