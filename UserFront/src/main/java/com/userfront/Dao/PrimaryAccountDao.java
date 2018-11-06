package com.userfront.Dao;

import com.userfront.domain.PrimaryAccount;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by MTouiti on 11/05/18.
 */
public interface PrimaryAccountDao extends CrudRepository<PrimaryAccount,Long> {

    PrimaryAccount findByAccountNumber (int accountNumber);
}
