 Feature: The OrangeHrm Website

   Scenario Outline: As a valid user, I can log into the Website

    Given I am on the login page
    When  I login with <username> and <password>
    Then  I verify <dashboard>

    Examples:
      | username | password     | dashboard    |
      | Admin    | admin123     | Dashboard    |
      
     #Scenario Outline: As a Invalid user, I shouldnot log into the Website

    #Given I am on the login page
    #When  I login with <username> and <password>
    #Then  I should see a message  <errorMessage>

     # Examples:
      #| username | password     | errorMessage           |
      #| Admin    | Admin123     | Invalid credentials    |
      #| admin    | admin123     | Invalid credentials    |
      #| admin    | Admin123     | Invalid credentials    |
