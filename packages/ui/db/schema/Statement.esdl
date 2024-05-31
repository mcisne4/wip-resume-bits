module default {
  type Statement {
    required _modified_date: cal::local_datetime;

    required statement: str {
      constraint min_len_value(2);
    }
  }
}
