import React from "react";
import { GenericDay } from "../../components/GenericDay/GenericDay";
import { TicketsAndRanges } from "./Day16.types";
import { getTicketsAndRanges } from "./helpers/getTicketsAndRanges";

export const Day16 = () => {
  const getResult1 = (ticketAndRanges: TicketsAndRanges) => {
    const { tickets, allRanges } = ticketAndRanges;
    const sumOfInvalidValues = tickets
      .flat()
      .filter((ticketValue) => !allRanges.includes(ticketValue))
      .reduce(
        (accInvalidValues, invalidValue) => accInvalidValues + invalidValue
      );
    return `Sum of all invalid values: ${sumOfInvalidValues}`;
  };

  const getResult2 = (ticketAndRanges: TicketsAndRanges) => {
    const {
      tickets,
      allRanges,
      fieldNameAndRanges,
      myTicket,
    } = ticketAndRanges;

    // Get all valid tickets
    const validTickets = tickets.filter(
      (ticket) =>
        ticket.filter((ticketValue) => !allRanges.includes(ticketValue))
          .length === 0
    );

    // Get possible field names for the fields of each ticket
    const ticketToFieldToPossibleFieldNames: string[][][] = validTickets.map(
      (_) => []
    );
    myTicket.forEach((_, fieldIndex) => {
      validTickets.forEach((ticket, ticketIndex) => {
        const currentValue = ticket[fieldIndex];
        // Find field names where current valid ticket value falls within range, add to pool
        const possibleFieldsForCurrentValue = fieldNameAndRanges
          .filter((fieldNameAndRange) =>
            fieldNameAndRange.ranges.find(
              (range) => range.min <= currentValue && currentValue <= range.max
            )
          )
          .map((fieldNameAndRange) => fieldNameAndRange.name);

        ticketToFieldToPossibleFieldNames[ticketIndex][
          fieldIndex
        ] = possibleFieldsForCurrentValue;
      });
    });

    // Find intersection of possible field names for all tickets for each field
    const myTicketPossibleFieldNames: string[][] = [];
    myTicket.forEach((_, fieldIndex) => {
      let intersection = ticketToFieldToPossibleFieldNames[0][fieldIndex];
      validTickets.forEach((_, ticketIndex) => {
        intersection = intersection.filter((fieldName) =>
          ticketToFieldToPossibleFieldNames[ticketIndex][fieldIndex].includes(
            fieldName
          )
        );
      });

      myTicketPossibleFieldNames[fieldIndex] = intersection;
    });

    // Resolve field name from intersection of possible field names for my ticket for each field
    let myTicketFieldNames = [...myTicketPossibleFieldNames];
    let resolvedFieldNames: Map<number, string> = new Map();
    let onePossibleFieldIndex = myTicketPossibleFieldNames.findIndex(
      (fieldNames) => fieldNames.length === 1
    );
    while (onePossibleFieldIndex > -1) {
      // Find first field index with only one possible field
      // Remove field from all other possible field name pools
      const onePossibleFieldName = myTicketFieldNames[onePossibleFieldIndex][0];

      myTicketFieldNames = myTicketFieldNames.map((fieldNames) =>
        fieldNames.filter((fieldName) => fieldName !== onePossibleFieldName)
      );

      // Remember resolved fields
      resolvedFieldNames.set(onePossibleFieldIndex, onePossibleFieldName);

      onePossibleFieldIndex = myTicketFieldNames.findIndex(
        (fieldNames) => fieldNames.length === 1
      );
    }

    let answer = 1;
    resolvedFieldNames.forEach((resolvedFieldName, index) => {
      if (resolvedFieldName.startsWith("departure")) {
        answer *= myTicket[index];
      }
    });

    return `Result of multiplying all values from fields starting with 'departure' from my ticket: ${answer}`;
  };

  return (
    <GenericDay
      dayNumber={16}
      getResult1={getResult1}
      getResult2={getResult2}
      getProcessedData={getTicketsAndRanges}
      filePath="data/Day16/puzzleInput.txt"
    />
  );
};
